import { ParentComponent } from "solid-js"

export const HStack: ParentComponent<{class?: string}> = (props) => {
  return (
    <div class={props.class + ` -:gap-5 flex` }>
      {props.children}
    </div>
  )
}