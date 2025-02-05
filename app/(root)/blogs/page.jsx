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
} from "@/components/ui/pagination"; // Import Shadcn UI pagination components

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3]);
  const postsPerPage = 9;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=100');
        const data = await response.json();
        setPosts(data);
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
    <div className="container mx-auto px-4 py-8">
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
          Explore our curated selection of courses designed to teach you
          in-demand skills that meet industry standards.
        </p>
      </div>
      <div className="flex justify-end items-end mb-4 pt-2">
        <input
          type="text"
          placeholder="Search posts..."
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <BentoGrid>
        {currentPosts.map((post) => (
          <BentoGridItem
            key={post.id}
            title={post.title}
            description={post.body}
            icon={
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={post.imageUrl} // Replace with the actual image URL field
                  alt={post.title}
                  height={100}
                  width={100}
                  className="rounded-full"
                />
              </motion.div>
            }
          />
        ))}
      </BentoGrid>
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
    </div>
  );
};

export default Blog;