package com.arvato.cc.dao1;

import com.arvato.cc.model.SyncBatch;

/**
 * Created with IntelliJ IDEA.
 * User: caol005
 * Date: 15-8-27
 * Time: 下午2:30
 * To change this template use File | Settings | File Templates.
 */
public interface SyncBatchDao {

    SyncBatch getLastBatch(int batchNo);

    void saveSyncBatch(SyncBatch syncBatch);

    /**
     * 聚石塔拉单获取最大Batch
     * @return batchNo
     */
    SyncBatch getMaxBatch();
}
