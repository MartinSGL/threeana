"use client";
import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const DarkLight = ({ isDark, setIsDark }: Props) => {
  return (
    <button className="button-dark-light" onClick={() => setIsDark(!isDark)}>
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default DarkLight;
