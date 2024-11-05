import React, { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// const InputwRef = () => {
//   return (
//     <div>InputwRef</div>
//   )
// }

// export default InputwRef


export default React.forwardRef(function InputwRef({ label, type = "text", className = "", ...props },ref) {
  const id = useId();
return (
  <>
    <div className="w-full flex flex-col gap-2  ">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        className={`  ${className}`}
        type={type}
        placeholder={props.placeholder}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  </>
);
});


/*
import React, { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ref is important to pass to parent component

const InputwRef = React.forwardRef(function InputwRef({ label, type = "text", className = "", ...props },ref) {
    const id = useId();
  return (
    <>
      <div className="w-full flex flex-col gap-2 ">
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <Input
          className={`${className}`}
          type={type}
          placeholder={props.placeholder}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </>
  );
});
export default InputwRef;
// alternate approach
// export default  React.forwardRef(Input);

*/
