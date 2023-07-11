import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filtering, sorting } from '../../redux/filter/filterSlice';

const SideBar = () => {
    const dispatch = useDispatch();
    const filter = (text) => {
        dispatch(filtering(text));

    }
    const selectValue = (e) => {
        dispatch(sorting(e.target.value));
    }
    return (
        <aside>
            <div class="sidebar-items">
                <div class="sidebar-content">
                    <h4>Sort</h4>
                    <select onChange={selectValue} name="option" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div class="sidebar-content">
                    <h4>Filter</h4>
                    <div class="radio-group">
                        <div>
                            <input onClick={() => filter('All')} type="radio" name="filter" id="lws-all" defaultChecked class="radio" />
                            <label for="lws-all">All</label>
                        </div>
                        <div>
                            <input onClick={() => filter('Saved')} type="radio" name="filter" id="lws-saved" class="radio" />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;