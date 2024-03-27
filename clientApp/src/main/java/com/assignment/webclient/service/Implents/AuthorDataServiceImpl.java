package com.assignment.webclient.service.Implents;

import com.assignment.webclient.mapper.AuthorMapper;
import com.assignment.webclient.service.IAuthorDataService;
import com.assignment.webclient.toClient.AuthorData;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AuthorDataServiceImpl extends ServiceImpl<AuthorMapper,AuthorData> implements IAuthorDataService {

}
