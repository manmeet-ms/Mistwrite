import React, { useId } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectwRef = ({ label, name, options, ...props }, ref) => {
  const id = useId;
  return (
    <div className="flex flex-col">
    <Select>
      // TODO make SelectwRef, keys will passed b values, map lagega, register
      syntax in made component
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Set status" />
      </SelectTrigger>
      <SelectContent ref={ref}>
        <SelectGroup>
        {label  && 
        <SelectLabel htmlFor={id}>{label}</SelectLabel>} {/*will show if label is mentioned */}
        {options?.map((optionName, index) => ( /* by default array will be passed from  JSX */
  <SelectItem key={index} value={optionName}>{optionName}</SelectItem>
  
))        
         }
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>

  );
};

export default React.forwardRef(SelectwRef);
