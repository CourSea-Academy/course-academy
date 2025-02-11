"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from '@/components/shared/bento-grid';
import Image from "next/image";
import { FancyButton } from "@/components/shared/moving-border";
import { Sparkle } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import supabase from '@/lib/supabaseConfig';
import Footer from "@/components/shared/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3]);
  const postsPerPage = 9;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("blogs").select("*");
        setPosts(data);
        if (error) {
          console.error('Error fetching data:', error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateVisiblePages(page);
  };

  const updateVisiblePages = (page) => {
    if (page <= 3) {
      setVisiblePages([1, 2, 3]);
    } else if (page > 3 && page < totalPages - 2) {
      setVisiblePages([page - 1, page, page + 1]);
    } else {
      setVisiblePages([totalPages - 2, totalPages - 1, totalPages]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FancyButton className="inline-flex items-center justify-center gap-3 border px-3 py-1 rounded-full text-sm shadow-sm bg-white">
        <span>
          <Sparkle className="h-4 w-4" />
        </span>
        <span>Blogs</span>
      </FancyButton>
      <div className="mt-3">
        <h2 className="text-3xl font-semibold tracking-tight">
          Explore Our <span className="text-primary">Recent Blogs</span>
        </h2>
        <p className="mt-3 text-sm">
          Discover our collection of insightful blogs covering the latest trends, 
          industry insights, and expert knowledge to keep you informed and inspired.
        </p>
      </div>

      {(currentPosts.length === 0) ? <p className="text-center py-4">No Blogs Found!!!</p> : 
      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {currentPosts.map((post) => (
          <a key={post.id} href={`/blogs/${post.id}`} className="no-underline">
              <BentoGridItem
                key={post.id}
                title={post.title}
                category={post.cat}
                description={post.description}
                className="cursor-pointer bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[250px] h-full"
                icon={
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-40 flex justify-center items-center overflow-hidden rounded-lg"
                  >
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={300}
                      height={160}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </motion.div>
                }
              />
          </a>

        ))}
      </BentoGrid>
      }
      {
        (currentPosts.length > 9) &&
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1} />
              </PaginationItem>
              {visiblePages.map(page => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    className={currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> 
      }
      <Footer cName={"pt-0"} />
    </div>
  );
};

export default Blog;

