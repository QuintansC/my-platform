
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import CarouselVideos from "@/components/CarouselVideos";

export const metadata: Metadata = {
  title: "Next.js Chart | ArtFlame - Aulas",
  description:
    "Essa é uma pagina de aulas",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
        <CarouselVideos titulo="titulo" subtitulo="subtitulo"></CarouselVideos>
        <CarouselVideos titulo="titulo" subtitulo="subtitulo"></CarouselVideos>
    </DefaultLayout>
  );
};

export default BasicChartPage;
