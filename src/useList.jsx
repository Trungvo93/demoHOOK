import { useState } from "react";

const useList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addUser = () => {
        const value = item.trim()
        const checkList = list.filter((e, index) => e.toLowerCase() === value.toLowerCase())
        if (checkList == false && value) {
            setList([...list, value]);
            setItem("");
        }

    }

    const delUser = () => {
        const value = item.trim();
        const checkIndex = list.findIndex(e => e.toLowerCase() === value.toLowerCase())
        console.log(checkIndex)
        if (checkIndex >= 0) {
            list.splice(checkIndex, 1)
            setList([...list])
            setItem("");
        }
    }

    return [list, item, setItem, addUser, delUser]
}

export default useList