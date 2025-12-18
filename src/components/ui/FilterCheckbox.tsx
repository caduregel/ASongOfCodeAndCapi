import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-dropdown-menu";

function FilterCheckbox({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean | undefined;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={label}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
      />
      <Label htmlFor={label} className="text-sm">
        {label}
      </Label>
    </div>
  );
}

export default FilterCheckbox;
