import React, { useState } from "react";
import { Hotsale } from "../components/hotsale";
import { Catalog } from "../components/catalog";
import { Footer } from "../components/footer";

export const Home = () => {
    return (
        <>
            <Hotsale />
            <Catalog />
            <Footer />
        </>
    );
};
