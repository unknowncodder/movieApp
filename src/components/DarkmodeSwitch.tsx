"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

type Props = {};

const DarkmodeSwitch = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => {
              setTheme("light");
            }}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => {
              setTheme("dark");
            }}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
};

export default DarkmodeSwitch;
