package com.assignment.webassign.service.implents;

import com.assignment.webassign.mapper.AuthorMapper;
import com.assignment.webassign.service.IAuthorService;
import com.assignment.webassign.toServer.AuthorMsg;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AuthorServiceImpl extends ServiceImpl<AuthorMapper, AuthorMsg> implements IAuthorService {
}
