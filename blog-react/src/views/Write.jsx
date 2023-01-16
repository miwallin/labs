import { useActionData, Form, redirect } from "react-router-dom";

const Write = () => {

    const data = useActionData();

    return (
        <div className="Write">
            <Form method="post" action="/write">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Text</label>
                    <textarea 
                        name="content" 
                        placeholder="Write your post here..." 
                        rows="5"
                        required
                    />
                    { data?.error && <span>{ data.error }</span> }
                </div>
                <button>Submit post</button>  
            </Form>
        </div>
    )
}
export default Write

export const writeAction = async ({ request }) => {
    const formData = await request.formData();
    const blogPost = {
        title: formData.get("title"),
        content: formData.get("content")
    }

    if (blogPost.content.length < 15) {
      return { error: "Post must be longer than 15 characters" };
    }

    try {
        await fetch("/mocked-api/post", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                userId: "1",
                title: blogPost.title,
                body: blogPost.content
            })
        });
    } catch (err) {
        console.error(`Error while posting: ${err}`);
    }
    return redirect("/");
}