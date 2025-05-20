"use client";

import { ProductResponse } from "@/types/products";
import React, { useEffect, useState } from "react";
import "../styles/product.scss";
import { useTheme } from "next-themes";

const ProductClientSide = ({ products }: { products: ProductResponse[] }) => {
  const [title, setTitle] = useState<string>(products[2]?.title || "");
  const selectedProductGroup = products.find((group) => group.title === title);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="products">
      <div className="products__banner">
        <div className="products__banner__content">
          <span className="products__subtitle">Özəl təkliflər</span>
          <p className="products__title">
            Payız gəldi, şərtlər daha da sadələşdi!
          </p>
        </div>

        <div className="products__nav">
          <ul className="products__nav--list">
            {products.map((product, index) => (
              <li
                key={index}
                className={`products__nav--title ${
                  title === product.title ? "active" : ""
                }`}
                onClick={() => setTitle(product.title)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="products-card">
        {selectedProductGroup?.products.map((product) => (
          <div key={product.id} className="products-card__item">
            <div className="products-card__image">
              <div className="products-card__discount">{product.discount}</div>
              <img
                className="products-card__image-main"
                src={product.image}
                alt="product"
                width={248}
                height={218}
              />
              <img
                className="products-card__image-icon"
                src="/icons/scales.svg"
                alt="scale"
              />
            </div>

            <div className="products-card__rating">
              <div>
                <span className="products-card__star">
                  <img src="/icons/star.svg" />
                </span>
                <span className="products-card__score">4.6</span>
              </div>
              <div>
                <span className="products-card__chat">
                  <img src="/icons/chat.svg" />
                </span>
                <span className="products-card__reviews">6 Rəy</span>
              </div>
            </div>

            <div className="products-card__title">{product.name}</div>

            <div className="products-card__prices">
              <div>
                <div className="products-card__old-price">
                  {product.price} ₼
                </div>
                <div className="products-card__new-price">
                  {product.discounted_price} ₼
                </div>
              </div>
              <div className="products-card__monthly">
                <div>{product.perMonth.month} ay</div>
                <b>{product.perMonth.price} ₼</b>
              </div>
            </div>

            <div className="products-card__actions">
              <button className="products-card__add-to-cart">
                <div>
                  <img
                    src={
                      theme === "light"
                        ? "/icons/basket.svg"
                        : "/icons/basketLight.svg"
                    }
                    alt="basket"
                  />
                </div>
                <div> {isMobile ? "Səbətə at" : "Səbətə əlavə et"}</div>
              </button>
              <button className="products-card__favorite">
                <img
                  src={
                    theme === "light"
                      ? "/icons/heart.svg"
                      : "/icons/heartLight.svg"
                  }
                  alt="like"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductClientSide;
