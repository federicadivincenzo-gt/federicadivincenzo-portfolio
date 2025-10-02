'use client';

import { BlogPosts } from 'app/components/posts/posts'
import {useEffect} from "react";

export default function Page() {

    useEffect(() => {
        document.title = "📚 Blog"

        return () => {
            document.title = "🌸 Federica's Portfolio"
        }
    }, [])

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  )
}
