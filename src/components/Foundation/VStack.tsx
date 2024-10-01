import { ParentComponent } from "solid-js"

export const VStack: ParentComponent<{class?: string}> = (props) => {
  return (
    <div class={props.class + ` -:gap-5 flex flex-col` }>
      {props.children}
    </div>
  )
}