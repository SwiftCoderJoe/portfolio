import { JSX, ParentComponent } from "solid-js";
import "./NeonLight.css"

export const NeonLights: ParentComponent = (props) => {  
    return (
      <div class="py-2 text-9xl  neon-text">
            {props.children}
      </div>
    );
}

export const NeonBorder: ParentComponent = (props) => {
    return (
        <div class="p-5 2px rounded-lg">
            {props.children}
        </div>
    )
}