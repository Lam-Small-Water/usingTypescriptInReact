import { useState, useEffect } from 'react'

type PostProp = {
  id: number;
  title: string;
}

type PostProps = PostProp[];

const Local = () => {
  const posts = [
    { id: 1, title: 'loveSong' },
    { id: 2, title: 'the one you love' },
  ];

  const [search, setSearch] = useState(
    localStorage.getItem('search') || 'love'
  );
  
  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);
  const filtered = posts.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <h1>localStorage&Children</h1>
      <LebelwithInput id='search' value={search} type='text' onSearch={handleSearch}>
        <strong>Search: </strong>
      </LebelwithInput>
      <List list={filtered} />
    </div>
  )
}

type SearchProps = {
  id: string;
  value: string;
  type?: string;
  children: React.ReactNode;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LebelwithInput: React.FC<SearchProps> = ({ id, value, type, children, onSearch }) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input type={type} onChange={onSearch} value={value}/>
    </>

  )
}

type ListProps = {
  list: PostProps;
};

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ul>{list.map((item) => <Item key={item.id} item={item} />)}</ul>
  )
}

type ItemProps = {
  item: PostProp;
};

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <p><a href="#">{item.title}</a></p>
  )
}

export default Local