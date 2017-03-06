<template>
    <scroll-bar class="flex-fill-height">
        <nav-list to="/" class="nav-item">
            <icon name="home"></icon> Viu Home
        </nav-list>
        <nav-list class="nav-item" :sublist="true">
            <icon name="shape-plus"></icon> Components
            <span slot="sublist">
                <nav-list to="/components/buttons" class="nav-item">
                    <icon name="crop-landscape"></icon> Buttons
                </nav-list>
                <nav-list to="/components/cards" class="nav-item">
                    <icon name="cards"></icon> Cards
                </nav-list>
                <nav-list to="/components/confirmation" class="nav-item">
                    <icon name="alert-octagram"></icon> Confirmation Dialog
                </nav-list>
                <nav-list to="/components/accordion" class="nav-item">
                    <icon name="arrow-expand-all"></icon> Expansion Panel
                </nav-list>
                <nav-list to="/components/lists" class="nav-item">
                    <icon name="format-list-bulleted"></icon> Lists
                </nav-list>
                <nav-list to="/components/menu" class="nav-item">
                    <icon name="image-filter-none"></icon> Menu
                </nav-list>
                <nav-list to="/components/selection-control" class="nav-item">
                    <icon name="toggle-switch"></icon> Selection Control
                </nav-list>
                <nav-list to="/components/snackbar" class="nav-item">
                    <icon name="message"></icon> Snackbar
                </nav-list>
                <nav-list to="/components/tooltips" class="nav-item">
                    <icon name="tooltip"></icon> Tooltips
                </nav-list>
            </span>
        </nav-list>
        <nav-list class="nav-item" :sublist="true">
            <icon name="box-shadow"></icon> Templates
            <span slot="sublist">
                <nav-list to="/templates/sliders" class="nav-item">
                    <icon name="fullscreen"></icon> Full Screen Slider
                </nav-list>
            </span>
        </nav-list>
    </scroll-bar>
</template>