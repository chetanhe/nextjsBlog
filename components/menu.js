import Link from "next/link";
import { useEffect, useState } from "react";

function MegaMenuItemLinks({columns}){
    return (
        <ul style={{"width":"1000px"}}>
            {
                columns.map((column)=>{
                    return (
                        <li key={column.column_id}>
                            <ul>
                                {
                                    column.data.map((data)=>{
                                        return (
                                            <li key={data.category_id}>
                                                <Link href={data.url}>{data.name}</Link>
                                                <ul>
                                                    {
                                                        data.products.map((product)=>{
                                                            return (
                                                                <li key={product.product_id}>
                                                                    <Link href={product.url}>
                                                                        {product.name}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        );
                                    })
                                }

                            </ul>
                        </li>
                    );
                })
            }
        </ul>
    );
}

function MegaMenuItem({item, index, isOPen, hanleISOPen}){
    const spanClasses = [];
    const liClasses = [item.name.toLowerCase().replace(/\'/gi, '').replace(' ','-')];

    function handleClickOfType(e){
        e.preventDefault();
        document.getElementById("panel-menu").querySelectorAll(".open").forEach(box => {
            box.classList.remove("open");
        });
        e.target.closest('li').classList.add("open");
    }

    if(isOPen == index){
        liClasses.push('open');
    }

    if(index == 0){
        spanClasses.push("firstMenu");
    }

    if(item.name.toLowerCase().includes("men")){
        spanClasses.push("male-top-menu");
    }

    return (
        <li className={liClasses.join(' ')} onClick={(e)=>hanleISOPen(e, index)}>
            <span className={spanClasses.join(' ')}>{item.name}</span>
            <MegaMenuItemLinks  columns={item.columns} />
        </li>
    );
}

function MegaMenuItems({initData}){
    const [isOPen, setIsOPen] = useState(0);

    function hanleISOPen(e, index){
        e.preventDefault();
        setIsOPen(index);
    }

    return (
        <ul>
        {
            initData.NAV_MENU.menu.map((item, index)=>{
                return <MegaMenuItem key={index} item={item} index={index} isOPen={isOPen} hanleISOPen={hanleISOPen} />
            })
        }
        </ul>
    );
}

export default function Menu({initData}){
    const navClasses = ["container", "container-lg"];
    
    return (
        <nav id="menu" className={navClasses.join(' ')}>
            <div id="panel-menu" style={{"top":"75px"}}>
                <MegaMenuItems initData={initData}/>
            </div>
        </nav>
    );
}