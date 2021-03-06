import Link from 'next/link';
import { IReadTimeResults } from 'reading-time';
import { DateAndReadingTime } from '../common/date-reading-time';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readingTime: IReadTimeResults;
};

export const PostPreview = ({ title, date, excerpt, readingTime, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref={true}>
      <div className="p-4 border-solid border-2 rounded border-background-500 dark:border-foreground-500 cursor-pointer">
        <h3 className="text-xl md:text-3xl font-bold mb-2 leading-snug">
          <p className="hover:underline">{title}</p>
        </h3>
        <DateAndReadingTime date={date} readingTime={readingTime} />
        <p className="text sm:text-lg">{excerpt}</p>
      </div>
    </Link>
  );
};
