import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function LocaleSelector(props: { langDict: LangDict }) {
  return (
    <Dropdown className="!text-xl">
      <DropdownTrigger>
        <Button className="text-white !text-xl" variant="light">
          {props.langDict.Lang}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          href={"/" + props.langDict.NotLang.toLowerCase()}
          className="text-black !text-xl"
          key="other"
        >
          {props.langDict.NotLang}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
