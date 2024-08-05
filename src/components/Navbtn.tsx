import { useState } from "react";
import { Navopt } from "../data/Navctx";

interface Props {
    text: string;
    options: Navopt[];
};

function Navbtn(props: Props) {
    const [selectedOption, setSelectedOption] = useState<string>("999");

    const functionMap = () => (
        props.options.map((opt) => (
            opt.onClick
        ))
    )

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedOption(value);

        functionMap()[Number(value)]()
        setSelectedOption("999")
    }

    return (
        <select onChange={handleSelectChange} value={selectedOption} className="w-20 text-center px-2 rounded-md bg-gray-900 hover:bg-gray-700 hover:cursor-pointer text-gray-300">
            <option className="hidden text-center" value="999">{props.text}</option>
            {props.options.map((opt, index) => (
                <option className="text-left" value={index} >{opt.name}</option>
            ))}
        </select>
    );
};

export default Navbtn;