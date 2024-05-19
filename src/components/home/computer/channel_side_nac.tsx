"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { data } from "@/utils/data/channel_image";
import Image from "next/image";
import { Typography } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
export function ChannelScroll() {
  const searchParams = useSearchParams();
  const type=searchParams.get("type") || "Live Tv"
  const channel = searchParams.get("channel");
  const pathName = usePathname();
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "20%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        bgcolor: "inherit",

        overflowY: "auto",
        whiteSpace: "nowrap",
        alignItems: "start",
        justifyContent: "center",
        paddingX: "2rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        boxShadow:
          "inset 10px 0 10px -5px rgba(16, 15, 46, 0.5), inset -10px 0 10px -5px rgba(16, 15, 46, 0.5)",
      }}
    >
      {data.map((items, index) => (
        <Link href={`?${new URLSearchParams({channel:items.name, type,})}`}>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set("channel", items.name);
            }}
          >
            <Image
              width={50}
              height={50}
              src={`${items.url}`}
              alt="Ch"
              style={{
                width: `${items.name == channel ? "4rem" : "3rem"}`,
                height: `${items.name == channel ? "4rem" : "3rem"}`,
                borderRadius: "50%",
                borderColor: `${
                  items.name == channel ? "rgba(99,102,241,0.5)" : ""
                }`,
                borderWidth: `${items.name == channel ? "3px" : ""}`,
                color: "white",
                padding: "0.5rem",
                background: "rgb(30 27 75)",
                opacity: 0.8,
                transition: "transform 0.2s ease-in-out",
              }}
              className="active:scale-[1.2]"
            />
            <Typography
              sx={{ fontSize: `${items.name == channel ? "1.5rem" : "1rem"}` }}
            >
              {items.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
}
