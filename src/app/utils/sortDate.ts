type SortDirection = "asc" | "desc";

export const sortByDate = <T extends { createdAt: Date }>(
  items: T[],
  direction: SortDirection = "desc"
) => {
  return items.sort((a, b) => {
    const comparison =
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return direction === "desc" ? comparison : -comparison;
  });
};
