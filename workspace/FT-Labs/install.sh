#!/bin/bash

cd ./picom/ || return
rm -rf build

# build
# git submodule update --init --recursive
LDFLAGS="-L/usr/local/lib" CPPFLAGS="-I/usr/local/include" meson setup --buildtype=release . build
ninja -C build

# install

sudo ninja -C build install
