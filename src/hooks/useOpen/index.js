import React from "react";

export const useOpen = (val) => {
  const [open, setOpen] = React.useState(val);
  const isOpen = () => setOpen(true);
  const isClose = () => setOpen(false);
  const isToggle = () => setOpen(!open);
  return { open, isClose, isOpen, isClose, isToggle };
};
