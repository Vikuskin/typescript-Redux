import { useEffect } from "react";
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypeSelector";

export const Posts: React.FC = () => {
    const {fetchPosts} = useActions()
    const {posts} = useTypedSelector(state => state.post);

    useEffect(() => {
        fetchPosts();
    }, []);

    
    return (
        <>
            <h1>Posts</h1>
            <div>
                {posts[0] ? 
                posts.map(post => 
                <div key={post.id} style={{border: '1px solid black', padding: '10px', margin: '10px 0'}}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>) :
                <p>Нет постов</p>}
            </div>
        </>
    )
}