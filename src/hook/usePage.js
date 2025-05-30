
let totalPages = 0;

function usePage() {
  totalPages += 1;
  const pageNumber = totalPages;

  return {
    pageNumber,
    totalPages,
  };
}

export default usePage