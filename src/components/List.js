function List({list}){
    return(
        <div>
            {list.map((item,i)=>(<p key={i}>{item.name}</p>))}
        </div>
    )
}
export default List;