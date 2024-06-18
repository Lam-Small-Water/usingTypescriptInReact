import { useState, useEffect } from 'react';

interface InitData {
  id: number;
  title: string;
}


const Custom = () => {
  const posts = [
    { id: 1, title: 'reactRecap' },
    { id: 2, title: 'reactNotes' },
  ];

  const useStorageState = (key: string, initial: string) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initial
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue] as const;
  }

  const [search, setSearch] = useStorageState('searchPro', 'react');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const filtered = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="app">
      <h1>Custom</h1>
      <LabelwithInput id='search' type='text' value={search} onSearch={handleSearch}>
        <strong>Search: </strong>
      </LabelwithInput>
      <List list={filtered} />
    </div>
  )
}


type SearchProps = {
  id: string;
  type: string;
  value: string;
  children: React.ReactNode;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelwithInput: React.FC<SearchProps> = ({ id, type, value, children, onSearch }) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input type={type} value={value} onChange={onSearch} />
    </>
  )
}

type ListProps = {
  list: InitData[];
}

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item) => <Item key={item.id} item={item} />)}
      </ul>
    </>
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



export default Custom