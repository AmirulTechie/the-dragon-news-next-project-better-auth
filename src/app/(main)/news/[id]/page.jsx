import { getNewsDeatilsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const splitIntoParagraphs = (text) => {
    if (!text) return [];
    const sentences = text.match(/[^.!?]+[.!?]+["']?/g) || [text];
    const chunks = [];
    for (let i = 0; i < sentences.length; i += 4) {
        chunks.push(sentences.slice(i, i + 4).join(' ').trim());
    }
    return chunks;
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDeatilsById(id);
    const paragraphs = splitIntoParagraphs(news.details);

    return (
        <main className="min-h-screen bg-[#f9f6f1] py-12 px-4">
            <article className="max-w-3xl mx-auto">

                {/* Category tag */}
                <div className="mb-6">
                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-rose-600 border-b-2 border-rose-600 pb-0.5">
                        {news.category_id}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black leading-[1.1] text-gray-950 mb-6 font-serif">
                    {news.title}
                </h1>

                {/* Meta row */}
                <div className="flex items-center justify-between border-y border-gray-300 py-4 mb-8">
                    <div className="flex items-center gap-3">
                        <Image
                            src={news.author?.img}
                            alt={news.author?.name}
                            width={44}
                            height={44}
                            className="rounded-full object-cover ring-2 ring-rose-200"
                        />
                        <div>
                            <p className="text-sm font-bold text-gray-900">{news.author?.name}</p>
                            <p className="text-xs text-gray-500">{news.author?.published_date}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                            <FaStar className="text-amber-400" />
                            <span className="font-semibold">{news.rating?.number}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                            <IoEyeSharp />
                            <span>{news.total_view?.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl text-gray-500">
                            <button className="hover:text-rose-600 transition-colors" aria-label="Share">
                                <CiShare2 />
                            </button>
                            <button className="hover:text-rose-600 transition-colors" aria-label="Bookmark">
                                <CiBookmark />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <figure className="mb-10 -mx-4 md:-mx-12">
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        width={1200}
                        height={700}
                        className="w-full object-cover max-h-[520px]"
                        priority
                    />
                </figure>

                {/* Article Body */}
                <div className="prose-article">
                    {paragraphs.map((para, i) => (
                        <p
                            key={i}
                            className={`
                text-[17.5px] leading-[1.9] text-gray-800 mb-7 tracking-[0.012em]
                ${i === 0
                                    ? "first-letter:text-[5rem] first-letter:font-black first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-gray-950 first-letter:font-serif"
                                    : ""}
              `}
                        >
                            {para}
                        </p>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-10">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-rose-500 text-lg">✦</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Back Button */}
                <div className="pb-12">
                    <Link href={`/category/${news.category_id}`}>
                        <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-rose-600 transition-colors">
                            <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            All news in this category
                        </button>
                    </Link>
                </div>

            </article>
        </main>
    );
};

export default NewsDetailsPage;