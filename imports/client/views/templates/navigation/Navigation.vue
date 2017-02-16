<template>
    <side-navigation :is-fix-lg="true">
        <img src="/img/a.jpg" class="img-responsive" alt="">
        <scroll-bar>
            <nav-list to="/" class="nav-item">
                <icon name="paper-cut-vertical"></icon> Dashboard
            </nav-list>
            <nav-list to="/testing" class="nav-item">
                <icon name="paper-cut-vertical"></icon> Testing
            </nav-list>
            <divider></divider>
            <nav-list to="/testing" class="nav-item">
                <icon name="paper-cut-vertical"></icon> Sign Out
            </nav-list>
        </scroll-bar>
    </side-navigation>
</template>