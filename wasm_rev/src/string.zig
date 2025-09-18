const std = @import("std");
const allocator = std.heap.page_allocator;

pub const String = packed struct {
    length: u32,
    pointer: [*]const u8,

    pub fn init(str: []const u8) *String {
        const string = allocator.dupe(u8, str) catch @panic("couldnt allocate");
        const js_str = allocator.create(String) catch @panic("couldnt allocate");
        js_str.* = .{
            .length = string.len,
            .pointer = string.ptr,
        };
        return js_str;
    }

    pub fn from_len(len: u32) *String {
        const string = allocator.alloc(u8, len) catch @panic("couldnt allocate");
        const js_str = allocator.create(String) catch @panic("couldnt allocate");
        js_str.* = .{
            .length = len,
            .pointer = string.ptr,
        };
        return js_str;
    }

    pub fn destroy(self: *String) void {
        allocator.destroy(self);
    }
};
