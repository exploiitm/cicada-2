const std = @import("std");
const String = @import("string.zig").String;
const allocator = std.heap.page_allocator;

export fn alloc(len: u32) [*]u8 {
    const mem = allocator.alloc(u8, len) catch @panic("couldnt allocate");
    return mem.ptr;
}

fn encrypt(flag: [:0]const u8) [:0]u8 {
    var mem: [flag.len:0]u8 = undefined;

    for (flag, 0..) |c, i| {
        mem[i] = c;
    }

    return &mem;
}

export fn is_flag(flag: *String) bool {
    const true_flag = comptime encrypt("exploiitm{rekusakusakusa_wa5m_rekusakusakusa}");
    var match = true;
    var l: usize = 0;
    inline for (true_flag, 0..) |c, i| {
        l += 1;
        match = match and flag.pointer[i] == c;
    }

    return match;
}
