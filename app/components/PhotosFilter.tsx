"use client";

import { ChangeEvent, useState } from "react";
import { sortValues } from "../../src/consts/sortValues";
import { Input, Select } from "../../components";
import strings from "../../src/consts/strings";

const PhotosFilter = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
  };

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSort(value);
  };

  return (
    <div className="flex max-w-sm gap-4 border-t border-gray-100">
      <Input
        placeholder={strings.search}
        value={search}
        onChange={handleSearch}
      />
      <Select
        label={`${strings.sort}:`}
        options={sortValues}
        onChange={handleSort}
      />
    </div>
  );
};

export default PhotosFilter;
