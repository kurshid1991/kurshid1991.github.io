import React from 'react';

// Helper function to extract video ID from the playlist URL
const extractFirstVideoId = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : '';
};

const classrooms = [
  {
    title: 'AI/ML in Bioinformatics',
    inviteLink: 'https://classroom.google.com/c/NzUyODk0NDkzNDcw?cjc=nheipf7e',
    youtubePlaylist: 'https://www.youtube.com/watch?v=IzYjJY2fmrE&list=PLiUTNOnTaO6G5wMuI2ThSrd-OWXgZim9A',
  },
  {
    title: 'scRNA-seq Data Analysis Using Seurat',
    inviteLink: 'https://classroom.google.com/c/NzcxODY5MzM3OTkx?cjc=usnpoawr',
    youtubePlaylist: 'https://www.youtube.com/watch?v=3D5FosglYdk&list=PLiUTNOnTaO6EZjjNuX_qoyeedhzAoBVkk',
  },
];

const Classrooms = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-8">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">
        Google Classroom Content
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {classrooms.map((course, index) => {
          const videoId = extractFirstVideoId(course.youtubePlaylist);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : '/images/default_image.png';

          return (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center transition-all duration-300 group-hover:text-[#FFD700] group-hover:[font-family:'Monotype_Corsiva',cursive]">
                {course.title}
              </h2>

              <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                <a href={course.youtubePlaylist} target="_blank" rel="noopener noreferrer">
                  <img
                    src={thumbnail}
                    alt="YouTube thumbnail"
                    className="object-cover w-full h-full rounded hover:opacity-90 transition"
                    onError={(e) => {
                      e.target.src = '/images/default_image.png';
                    }}
                  />
                </a>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <a
                  href={course.inviteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                >
                  Join Classroom
                </a>
                <a
                  href={course.youtubePlaylist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition"
                >
                  Watch Playlist
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classrooms;
