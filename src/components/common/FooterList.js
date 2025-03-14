import React from "react";

export default function FooterList({ listTitle, listLink }) {
    return (
        <a href={listLink}>
            <li class="hover:bg-PrimaryColorDarkHover px-2 rounded-lg  box-border min-w-[140px] min-h-[30px] ">
                {listTitle}
            </li>
        </a>
    );
}
