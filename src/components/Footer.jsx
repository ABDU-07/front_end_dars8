import React from "react";

export default function Footer() {
    return (
        <footer className="hidden max-md:flex justify-around py-7 bg-[#1C1E53]">
            <div className="flex flex-col gap-10 ">
                <div className="flex gap-20">
                    <a href="#">
                        <img
                            src="/src/img/icon/home.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="/src/img/icon/about_us.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>

                    <a href="#">
                        <img
                            src="/src/img/icon/features.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>
                </div>
                <div className="flex gap-20">
                    <a href="#">
                        <img
                            src="/src/img/icon/pricing.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>

                    <a href="#">
                        <img
                            src="/src/img/icon/faq.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>

                    <a href="#">
                        <img
                            src="/src/img/icon/blog.png"
                            alt=""
                            width="35"
                            height="35"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
