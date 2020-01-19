course = Course.create( title: 'Hello World', description: 'Create a react with ruby on rails' )

section = Section.create( title: 'Chapter 1', course: course )

episodes = Episode.create([
    { title: '1. test 1', description: 'loreum ipsum', url: 'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
    { title: '2. test 2', description: 'loreum ipsum', url: 'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
    { title: '3. test 3', description: 'loreum ipsum', url: 'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
    { title: '4. test 4', description: 'loreum ipsum', url: 'https://www.youtube.com/embed/B0SxxHAImhc', section: section },
  ])
