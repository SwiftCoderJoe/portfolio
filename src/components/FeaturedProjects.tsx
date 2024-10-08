import { Accessor, createSignal, Setter } from "solid-js"
import { HStack } from "./Foundation/HStack"
import { Spacer } from "./Foundation/Spacer"
import { VStack } from "./Foundation/VStack"

interface Project {
  name: string,
  description: string,
  technologies: string,
  links: string,
}

export const FeaturedProjects = () => {
  const projects = [{
    name: "6502 Breadboard Computer",
    description: "This 6502-based computer is based on Ben Eater's design. Because it sits right between the low-level hardware I built in my 8-bit CPU project and the high-level software I generally deal with, this project was simultaneously capable enough to teach me real assembly programming and yet simple enough for a beginner to understand. I extended Ben Eater's design with a PS/2 keyboard interface and a simple text editing program.",
    technologies: "This computer uses WDC 65C-Series ICs and 6502 Assembly",
    links: "Assembly Code"
  }, {
    name: "StatShot",
    description: "This 6502-based computer is based on Ben Eater's design. Because it sits right between the low-level hardware I built in my 8-bit CPU project and the high-level software I generally deal with, this project was simultaneously capable enough to teach me real assembly programming and yet simple enough for a beginner to understand. I extended Ben Eater's design with a PS/2 keyboard interface and a simple text editing program.",
    technologies: "This computer uses WDC 65C-Series ICs and 6502 Assembly",
    links: "Assembly Code"
  }, {
    name: "8-Bit Breadboard CPU",
    description: "This 6502-based computer is based on Ben Eater's design. Because it sits right between the low-level hardware I built in my 8-bit CPU project and the high-level software I generally deal with, this project was simultaneously capable enough to teach me real assembly programming and yet simple enough for a beginner to understand. I extended Ben Eater's design with a PS/2 keyboard interface and a simple text editing program.",
    technologies: "This computer uses WDC 65C-Series ICs and 6502 Assembly",
    links: "Assembly Code"
  }]

  const [project, setProject] = createSignal(projects[0])

  return (
    <HStack class="w-full">
      <ProjectContent for={project}/>
      <ProjectPicker selectedProject={project} setProject={setProject} projects={projects}/>
    </HStack>
  )
}

const ProjectContent = ({for: project}: {for: Accessor<Project>}) => {
  return (
    <div class="px-5 flex-1">
      <div class="p-5 bg-cyan-100/50 h-full">
        <div class="border-2 border-cyan-600 h-full">
          <h3 class="text-3xl">{project().name}</h3>

        </div>
      </div>
    </div>
  )
}

const ProjectPicker = ({setProject: setProject, projects: projects, selectedProject: selectedProject}: {setProject: Setter<Project>, projects: Project[], selectedProject: Accessor<Project>}) => {
  return (
    <VStack>
      {projects.map(project => (
        <HStack class="gap-0 group">
          <div onClick={() => {setProject(project)}} class={`flex-1 ${project == selectedProject() ? "bg-gray-300" : "bg-gray-100"} group-hover:bg-gray-300/70 p-5 text-3xl`}>
            {project.name}
          </div>
          <div class={`flex-shrink w-12 ${project == selectedProject() ? "bg-gray-300" : "bg-gray-100"} group-hover:bg-gray-300/70 origin-top-left -skew-y-30`}></div>
        </HStack>
      ))}
    </VStack>
  )
}