"use client";

import {
  OakFlex,
  OakHeading,
  OakThemeProvider,
  oakDefaultTheme,
} from "@oaknational/oak-components";

export default function Home() {
  return (
    <OakThemeProvider theme={oakDefaultTheme}>
      <OakFlex
        $width="100vw"
        $height="100vh"
        $flexDirection={"column"}
        $alignItems={"center"}
        $background={"mint30"}
        $justifyContent={"center"}
      >
        <OakFlex
          $background={"oakGreen"}
          $pa="inner-padding-m"
          $borderRadius={"border-radius-s"}
        >
          <OakHeading tag="h1">Hello World</OakHeading>
        </OakFlex>
      </OakFlex>
    </OakThemeProvider>
  );
}
