# First, let's start with a Caddy image. We're using Caddy here because it's easy, and I don't have a ton of time for upkeep of this server.
# Since we're not using any super advanced features and this site isn't mission-critical, we're getting the latest version 2 release.
FROM caddy:2-alpine

# Let's add our caddyfile. Since this should change less than the website data, it's added first.
COPY Caddyfile /etc/caddy/Caddyfile

# Last, we add the site into the srv directory.
COPY src /srv

# We're done!