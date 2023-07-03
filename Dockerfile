# First, let's start with a Caddy image. We're using Caddy here because it's easy, and I don't have a ton of time for upkeep of this server.
# Since we're not using any super advanced features and this site isn't mission-critical, we're getting the latest version 2 release.
FROM caddy:2-alpine AS final

# Let's add our caddyfile. Since this should change less than the website data, it's added first.
COPY Caddyfile /etc/caddy/Caddyfile

# Next, we're going to build our site, using QDsrcset as a convenience.
FROM node:20-alpine AS build

# Install deps
WORKDIR /usr/src

COPY package.json ./
COPY package-lock.json ./

RUN npm i

# Now let's copy in the site and build it.
# This also copies a few unneccessary things like the README and Caddyfile, but that's not a huge issue.
COPY . . 
RUN npm run build

# Last, we add the site into the srv directory.
FROM final
COPY --from=build /usr/src/dist /srv

# We're done!