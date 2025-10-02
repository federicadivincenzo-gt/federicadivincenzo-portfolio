'use client';

import Card from "../card";
import {useFetchPosts} from "../../../hooks/useFetchPosts";
import {Button} from "../../button/button";
import {ArrowIcon} from "../../icons/arrow-icon/arrow-icon";


export const PostsCard = () => {
    const {data, isLoading, isError} = useFetchPosts()

    if (isLoading) {
        return (<div>...Loading </div>)
    }
    return (
        <Card styles="grow">
            <div className=" flex flex-col h-full ">
                <div className="flex items-center justify-between mb-4 px-1">
                    <h3 className="font-medium text-xl">Posts </h3>
                    <Button url="/blog" noStyle>
                        <ArrowIcon />
                    </Button>

                </div>
                <ul className="grow h-full flex flex-col justify-end">
                    {
                        data && data.map((post) => (
                            <li key={post.slug} >
                                <Button url={`/blog/${post.slug}`}>
                                    {post.metadata.title}
                                </Button>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </Card>
    )
}