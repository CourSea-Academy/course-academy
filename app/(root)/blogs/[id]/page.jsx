"use client"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { useParams } from "next/navigation"; 
import supabase from "@/lib/supabaseConfig";
import Image from "next/image";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import Footer from "@/components/shared/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  console.log("This page is getting rendered ===> ", id);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
      if (data) setPost(data);
      if (error) console.error("Error fetching blog post:", error);
    }
    if (id) fetchPost();
  }, [id]);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  }, [post]);

  if (!post) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-500 mt-2">{post.description}</p>

        {post.img && (
          <div className="w-full mt-6 rounded-lg overflow-hidden">
            <Image 
              src={post.img} 
              alt={post.title} 
              width={800} 
              height={400} 
              className="object-cover w-full h-80 rounded-lg" 
            />
          </div>
        )}

        <div
          className="prose prose-lg prose-blue dark:prose-invert max-w-none pb-5"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></div>
      </div>
      <Footer className={"pt-16"} />
    </div>
    
  );
};

export default BlogPost;
