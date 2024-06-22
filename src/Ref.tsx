import { useState, useEffect, ReactNode, useRef } from 'react';

const posts = [
    { id: 1, title: 'useRef' },
    { id: 2, title: 'useEffect' },
];

interface InitData {
    id: number;
    title: string;
}


const Ref = () => {

    const useStorage = (
        key: string, init: string
    ): [string, (newValue: string) => void] => {
        const [value, setValue] = useState(
            localStorage.getItem(key) || init
        );

        useEffect(() => {
            localStorage.setItem(key, value)
        }, [value, key]);

        return [value, setValue]
    }

    const [search, setSearch] = useStorage('searchPlus', 'use');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const filtered = posts.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='app'>
            <LabelwithInput
                id='search'
                value={search}
                isFocused
                onSearch={handleSearch}>
                <strong>Search: </strong>
            </LabelwithInput>
            <List list={filtered} />
        </div>
    )
}

type InputProps = {
    id: string;
    type?: string;
    value: string;
    isFocused: boolean;
    children: ReactNode;
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelwithInput: React.FC<InputProps> = ({
    id,
    type = 'text',
    value,
    isFocused,
    children,
    onSearch
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input ref={inputRef} id={id} type={type} value={value} onChange={onSearch} />
        </>
    )
};

type ListProps = {
    list: InitData[];
}

const List: React.FC<ListProps> = ({ list }) => {
    return (
        <ul>
            {list.map((item) => <Item key={item.id} item={item} />)}
        </ul>
    )
}

type ItemProps = {
    item: InitData;
}


const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <li>{item.title}</li>
    )
}


export default Ref