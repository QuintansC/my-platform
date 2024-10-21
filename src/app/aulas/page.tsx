
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import CarouselVideos from "@/components/CarouselVideos";

export const metadata: Metadata = {
  title: "ArtFlame - Aulas",
  description:
    "Essa é uma pagina de aulas",
};


const BasicChartPage: React.FC = () => {
  const teste = [
    {
      teste: "teste"
    },
    {
      teste: "teste"
    },
    {
      teste: "teste"
    },
    {
      teste: "teste"
    },
    {
      teste: "teste"
    },
     {
      teste: "teste"
    },
    {
      teste: "teste"
    },
    {
      teste: "teste"
    }
  ]

  return (
    <DefaultLayout>
        <CarouselVideos titulo="titulo" subtitulo="subtitulo" videos={teste}></CarouselVideos>
        <CarouselVideos titulo="titulo" subtitulo="subtitulo" videos={teste}></CarouselVideos>
    </DefaultLayout>
  );
};

export default BasicChartPage;
