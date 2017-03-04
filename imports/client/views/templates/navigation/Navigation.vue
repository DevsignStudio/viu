<template>
    <side-navigation :is-fix-lg="true">
        <img src="/img/a.jpg" class="img-responsive" alt="">
        <scroll-bar class="flex-fill-height">
            <nav-list to="/" class="nav-item">
                <icon name="paper-cut-vertical"></icon> Dashboard
            </nav-list>
            <nav-list class="nav-item" :sublist="true">
                <icon name="paper-cut-vertical"></icon> Components
                <span slot="sublist">
                    <nav-list to="/components/cards" class="nav-item">
                        <icon name="paper-cut-vertical"></icon> Cards
                    </nav-list>
                    <nav-list to="/components/buttons" class="nav-item">
                        <icon name="paper-cut-vertical"></icon> Buttons
                    </nav-list>
                    <nav-list to="/components/accordion" class="nav-item">
                        <icon name="paper-cut-vertical"></icon> Expansion Panel
                    </nav-list>
                    <nav-list to="/components/lists" class="nav-item">
                        <icon name="paper-cut-vertical"></icon> Lists
                    </nav-list>
                    <nav-list to="/components/selection-control" class="nav-item">
                        <icon name="paper-cut-vertical"></icon> Selection Control
                    </nav-list>
                </span>
            </nav-list>
        </scroll-bar>
    </side-navigation>
</template>