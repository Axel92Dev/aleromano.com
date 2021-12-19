import { FunctionComponent } from 'react';
import Link from 'next/link';

import Avatar from '../common/avatar';
import DateFormatter from '../common/date-formatter';
import PostTitle from './post-title';
import Author from '../../types/author';
import { IReadTimeResults } from 'reading-time';

type Props = {
  title: string;
  date: string;
  author: Author;
  readingTime: IReadTimeResults;
};

const DateAndReadingTime: FunctionComponent<Pick<Props, 'date' | 'readingTime'>> = ({ date, readingTime }) => (
  <div className="ml-16 mb-6 text-lg">
    <DateFormatter dateString={date} /> • <span>{readingTime.text}</span>
  </div>
);

const PostHeader = ({ title, date, author, readingTime }: Props) => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Back</a>
        </Link>
      </h2>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <DateAndReadingTime date={date} readingTime={readingTime} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
          <DateAndReadingTime date={date} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
