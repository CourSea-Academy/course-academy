"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import supabase from "@/lib/supabaseConfig";
import Image from "next/image";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Footer from "@/components/shared/Footer";
import {
  PhoneCall,
  ThumbsUp
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle
} from "@/components/shared/glowing-stars";
import BookCourse from "@/components/shared/BookCourse";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);   

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
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}

        <div
          className="prose prose-lg prose-blue dark:prose-invert max-w-none pb-5 
            prose-ul:list-disc prose-ol:list-decimal prose-li:ml-6 prose-p:my-4"
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content, {
              USE_PROFILES: { html: true },
              ALLOWED_TAGS: [
                "h3",
                "p",
                "ul",
                "ol",
                "li",
                "br",
                "strong",
                "em",
                "pre",
                "code",
              ],
            }),
          }}
        ></div>
      </div>
      <div className="bg-secondary mt-5">
        <div className="mx-auto max-w-7xl relative flex justify-center w-full">
          <div className="absolute -top-16 w-full max-w-7xl rounded-md">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                <div className="flex flex-wrap text-center items-center justify-center gap-6">
                  <div className="text-left space-y-3">
                    <span>Still Confused?</span>
                    <p className="text-base">
                      Get Connected to our experts and know what&apos;s best for
                      you.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="text-secondary-foreground bg-white z-[100]"
                          variant="outline"
                        >
                          Get Connected Now <ThumbsUp className="ml-2 size-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <BookCourse interest="Courses" />
                      </DialogContent>
                    </Dialog>

                    <span className="text-xl flex items-center gap-3">
                      <PhoneCall className="size-6" />
                      +91 9632036963
                    </span>
                  </div>
                </div>
              </GlowingStarsTitle>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </div>
      <Footer cName={"pt-32"} />
    </div>
  );
};

export default BlogPost;
