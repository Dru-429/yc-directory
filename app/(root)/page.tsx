import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard'

const home = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {

  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "Dru " },
    _id: 1,
    description: "This is a discription",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZHRtNb-tLaKjrdh5dM-2K0bsOMh_BdJx2aUjjVS5yQsp52sDuAex-3XhtMDAfrdFNIY&usqp=CAU",
    category: "Robots",
    title: "We Robots",
  }]

  return (
    <>
      <section className='pink_container'>

        <h1 className='heading '>
          Pitch your startup,
          <br />
          Connect with Entrepreneurs
        </h1>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Events.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>

        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All Startups '}
        </p>

        <ul className='mt-7 card_grid'>
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType, number) => (
                <StartupCard
                  key={post?._id}
                  post={post}
                />
              ))
            ) : (
              (
                <p className='no-result'>
                  No startups Found
                </p>
              )
            )
            
          }
        </ul>
      </section>
    </>
  )
}

export default home